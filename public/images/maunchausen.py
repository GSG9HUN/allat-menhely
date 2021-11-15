#!/usr/bin/env python3
# encoding: utf-8


"""Write to std:out munchausen numbers between 0 and 440000000-1"""

def munchausen():

    for x in range(0,440000000):
        list=[]
        sum=0
        k=x
        while k > 0:
            list.append(k%10)
            k=int(k/10)
        for y in list:
            if(y==0):
                sum+=0
            else:
                sum+=pow(y,y)
        if(x==sum):
            print(x)

def main():
    munchausen()

if __name__ == "__main__":
    main()
