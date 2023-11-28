import pandas as pd
from os import listdir
import re
import json

dir = r"C:\Users\jonam\Desktop\4th year project\10.3 - Reduced"
json_dict = {}
mins = pd.Series(data = {"Points:0":0.000403,"Points:1":0.000116,"Points:2":-0.003254})

for filename in listdir(dir):
    print(filename)
    df = pd.read_csv(dir+"/{}".format(filename),usecols=["Points:0","Points:1","Points:2"])
    df = df - mins
    coords = df.to_numpy().flatten()
    coords = coords*1000
    coords = coords.round(2).tolist()
    frame = int(filename[2:][:-4])
    json_dict[frame] = {"data":coords}

with open("./public/3d.json", "w") as outfile: 
    json.dump(json_dict, outfile)

