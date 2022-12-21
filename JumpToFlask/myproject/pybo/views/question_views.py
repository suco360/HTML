from flask import Blueprint, render_template, request, url_for, redirect, g
from ..db import db
from pybo.forms import QuestionForm, AnswerForm
from datetime import datetime

bp = Blueprint('question', __name__, url_prefix='/question')

@bp.route('/list')
def _list():
    question_list = {}
    cursor = db.cursor()
    number = 10
    page = request.args.get('page', type=int, default = 1)
    
    sql = """
        SELECT T.*, U.username from
        (SELECT Q.*, ifnull(A.count, 0) as count
        FROM question AS Q 
        LEFT JOIN (SELECT count(*) AS count, question_id FROM answer GROUP BY question_id) AS A 
        ON Q.id = A.question_id) as T
        LEFT JOIN user as U
        on T.user_id = U.id
        ORDER BY Q.id desc LIMIT {} OFFSET {};
		""".format(number, number * (page - 1))
    cursor.execute(sql)
    item = cursor.fetchall()

    sql = 'SELECT count(*) as count FROM question;'
    cursor.execute(sql)
    get_length = cursor.fetchone()

    max_page = (get_length['count'] - 1) // number + 1
    question_list['item'] = item
    question_list['max_page'] = list(range(1, max_page + 1))
    question_list['page'] = page
    question_list['total'] = get_length['count']
    question_list['number'] = number

    return render_template('question/question_list.html', question_list=question_list)

@bp.route('/detail/<int:question_id>/')
def detail(question_id):
    form = AnswerForm()
    cursor = db.cursor()
    sql = """
        SELECT Q.*, U.username FROM 
        (SELECT * FROM question WHERE id={}) AS Q
        LEFT JOIN user AS U
        ON Q.user_id=U.id;
        """.format(question_id)
    cursor.execute(sql)
    question = cursor.fetchone()

    sql = """
        SELECT A.*, U.username FROM
        (SELECT * FROM answer WHERE question_id ={}) AS A
        LEFT JOIN user AS U 
        ON A.user_id=U.id;
        """.format(question_id)
    cursor.execute(sql)
    answer_set = cursor.fetchall()

    return render_template('question/question_detail.html',  question=question, answer_set=answer_set, form=form)

@bp.route('/create/', methods=('GET', 'POST'))
def create():
    if g.user is None:
        return redirect(url_for('auth.login'))

    form = QuestionForm()
    if request.method == "POST" and form.validate_on_submit():
        cursor = db.cursor()
        sql = "insert into question (subject, content, create_date, user_id) values ('{}','{}','{}',{})".format(form.subject.data, form.content.data, datetime.now(), g.user['user_id'])
        cursor.execute(sql)
        db.commit()
        return redirect(url_for('main.index'))

    return render_template('question/question_form.html', form=form)

@bp.route('/modify/<int:question_id>', methods=('GET', 'POST'))
def modify(question_id):
    cursor = db.cursor()
    sql = "select * from question where id={}".format(question_id)
    cursor.execute(sql)
    question = cursor.fetchone()
    
    if g.user['user_id'] != question['user_id']:
        flash('수정권한이 없습니다')
        return redirect(url_for('question.detail', question_id=question_id))
    if request.method == 'POST':  # POST 요청
        form = QuestionForm()
        if form.validate_on_submit():
            cursor = db.cursor()
            sql = "update question set subject='{}', content='{}', modify_date='{}' where id={};".format(form.subject.data, form.content.data, datetime.now(), question_id) 
            cursor.execute(sql)
            db.commit()
            return redirect(url_for('question.detail', question_id=question_id))
    else:  # GET 요청
        form = QuestionForm(subject=question['subject'], content=question['content'])
    return render_template('question/question_form.html', form=form)

@bp.route('/delete/<int:question_id>')
def delete(question_id):
    cursor = db.cursor()
    sql = "select * from question where id={}".format(question_id)
    cursor.execute(sql)
    question = cursor.fetchone()
    if g.user['user_id'] != question['user_id']:
        flash('삭제권한이 없습니다')
        return redirect(url_for('question.detail', question_id=question_id))
    sql = "delete from question where id={}".format(question_id)
    cursor.execute(sql)
    db.commit()
    return redirect(url_for('question._list'))