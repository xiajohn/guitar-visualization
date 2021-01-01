from note import Note
from transition import Transition
import pandas as pd
import csv
import seaborn as sns
import matplotlib.pyplot as plt
note = Note(1, 1)
note2 = Note(1, 3)
slide = Transition("slide", note, note2, 1)
print(note.getNoteLetter())

# field names 
fields = ['Year', 'Salary'] 
  
# data rows of csv file 
rows = [ ['1', '2'], 
         ['1', '3'], 
         ['4', '5'], 
         ['1', '5'], 
         ['2', '2'], 
         ['1', '4']] 
  
# name of csv file 
filename = "university_records.csv"
  
# writing to csv file 
with open(filename, 'w') as csvfile: 
    # creating a csv writer object 
    csvwriter = csv.writer(csvfile) 
      
    # writing the fields 
    csvwriter.writerow(fields) 
      
    # writing the data rows 
    csvwriter.writerows(rows)





flights=pd.read_csv("Book1.csv")
flights.head(10)
flights_dict = flights.to_dict()
print(flights_dict)



flights_wide_list = [col for _, col in flights_wide.items()]
sns.relplot(data=flights_wide_list, kind="line")


plt.show()