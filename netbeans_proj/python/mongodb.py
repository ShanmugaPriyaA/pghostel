
from pymongo import MongoClient
class mongo(object):
    def __init__(self,database_name='',table_name=''):
        self.client = MongoClient('localhost', 27017)
        self.db=''
        self.table=''
        if database_name:
            self.CrF_db(database_name)
        else:
            print "Warning: DataBase is not defined"
        if table_name:
            self.CrF_table(table_name)
        else:
            print "Warning: Table Name is not defined"
    def CrF_db(self,db_name): #create or fetch database
        try:
            if db_name:
                if type(db_name)==str:
                    self.db=self.client[db_name]
                else:
                    print "DataBase name should be in the type String"
            else:
                print "Database name is not defined."
        except Exception as e:
            print "An error occured(In CrF_db):",str(e)
            
    def CrF_table(self,table_name): #create or fetch table or collection
        try:
            if not self.db:
                print "Create a Database First, Before creating a table."
            elif table_name:
                if type(table_name)==str:
                    self.table=self.db[table_name]
                else:
                    print "Table name should be in the type String"
            else:
                print "Table name is not defined."
        except Exception as e:
            print "An error occured(In CrF_table):",str(e)
        


if __name__=='__main__':
    """ Main file"""
    m=mongo('Komodo','table-data')
    

