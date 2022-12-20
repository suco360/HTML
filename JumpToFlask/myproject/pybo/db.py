from pymysql import cursors, connect

db = connect(host='localhost',
            user='root',
            password='1111',
            database='test',
            cursorclass=cursors.DictCursor)