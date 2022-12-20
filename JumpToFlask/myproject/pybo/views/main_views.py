from flask import Blueprint, render_template, redirect, url_for
from ..db import db

bp = Blueprint('main', __name__, url_prefix='/')

@bp.route('/')
def index():
    
	return redirect(url_for('question._list'))

@bp.route('/hello')
def hello_pybo():

	return 'Hello, Pybo'
