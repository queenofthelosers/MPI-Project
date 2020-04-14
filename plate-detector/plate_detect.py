import numpy as np
import cv2 
import matplotlib.pyplot as plt
import base64
import requests
from pprint import pprint

##API call frequency (don't put less than 20)
freq = 50

plate_num = "Not detected"
xmin,ymin,xmax,ymax = 0,0,0,0
count = 0
response={}

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_alt2.xml')
plate_cascade = cv2.CascadeClassifier('haarcascade_indian_license_plate.xml')

def detect_face(img):
    
    face_img = img.copy()
  
    face_rects = face_cascade.detectMultiScale(face_img) 
    
    for (x,y,w,h) in face_rects: 
        cv2.rectangle(face_img, (x,y), (x+w,y+h), (255,255,255), 10) 
        
    return face_img

def detect_plate(img):

    global plate_num,xmin,xmax,ymin,ymax,count,response

    plate_img = img.copy()

    with open("saved_img.jpg","rb") as t_img:
        f = t_img.read()
        b = bytearray(f)

    regions = ['in'] # Change to your country

    if (count%freq == 0):

        response = requests.post('https://api.platerecognizer.com/v1/plate-reader/',
            data=dict(regions=regions),  # Optional
            files=dict(upload=b),
            headers={'Authorization': 'Token 98eebd2d5ffffe6cc57df9efd054641b73da16d5'})

        if (len(response.json().get("results")) > 0):
            xmin = response.json().get("results")[0].get("box").get("xmin")
            ymin = response.json().get("results")[0].get("box").get("ymin")
            xmax = response.json().get("results")[0].get("box").get("xmax")
            ymax = response.json().get("results")[0].get("box").get("ymax")

            plate_num = response.json().get("results")[0].get("plate")

            cv2.rectangle(plate_img, (xmin,ymin), (xmax,ymax), (0,0,255), 5)

    else:
        plate_rects = plate_cascade.detectMultiScale(plate_img)

        if (len(plate_rects) > 0):
            for (x,y,w,h) in plate_rects: 
                cv2.rectangle(plate_img, (x,y), (x+w,y+h), (255,255,255), 10) 

            xmin = plate_rects[0][0]
            ymin = plate_rects[0][1]
            xmax = plate_rects[0][2]+xmin
            ymax = plate_rects[0][3]+ymin


    font = cv2.FONT_HERSHEY_SIMPLEX
    cv2.putText(plate_img,text=plate_num,org=(xmin-10,ymin-10), fontFace=font,fontScale= 1,color=(255,255,255),thickness=2,lineType=cv2.LINE_AA)
    
    count += 1

    return plate_img

    
cap = cv2.VideoCapture(0)

while True: 
    
    ret, frame = cap.read(0) 

    cv2.imwrite(filename='saved_img.jpg', img=frame)

    frame = detect_plate(frame)
    frame = detect_face(frame)

    cv2.imshow('License Plate Detection', frame) 
 
    c = cv2.waitKey(1) 
    if c == 27: 
        break 
        

cv2.destroyAllWindows()
cap.release() 
