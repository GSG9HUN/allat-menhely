#!/usr/bin/env python3
# encoding: utf-8

import sys

"""Return sum of digits between 0 and 100"""

def szamjegyek_osszege():
    list=[x for x in range(101)];
    sum_digits=0
    for x in list:
        while (x >0):
            sum_digits+=x%10;
            x=int(x/10);
    return sum_digits
def main():
    print(szamjegyek_osszege())


if __name__ == "__main__":
    main()
