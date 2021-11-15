#!/usr/bin/env python3
# encoding: utf-8

import sys

"""Return characters which is in the 'text' and chars 'variable'"""

def valid(text,chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"):
    result =[];
    for x in text:
        for y in chars:
            if x==y :
                result.append(x);
    result="".join(result);
    return result;

def main():
    print(valid("Barking!"))
    print(valid("KL754", "0123456789"))
    print(valid("BEAN", "abcdefghijklmnopqrstuvwxyz"))


if __name__ == "__main__":
    main()
