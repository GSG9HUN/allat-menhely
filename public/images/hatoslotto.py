#!/usr/bin/env python3
import time
import itertools

def sum_equals(i,j,k,l,m,n):

    if i+j+k+l+m+n==90:
        return True
    return False


def primtenyezos(number):
    szam = number
    lista = list()
    i=2
    while i<=szam:
        if szam % i ==0:
            szam=szam/i
            lista.append(i)
        else:
            i+=1
    return lista

def multiple_equals(i,j,k,l,m,n):

    if i*j*k*l*m*n==996300:
        return True
    return False





def lotto_numbers():
    for i in range(1,45+1):
        for j in range(1,45+1):
            if(i==j):
               break
            for k in range(1,45+1):
                if k==j:
                    break
                for l in range(1, 45 + 1):
                    if l==k:
                        break
                    for m in range(1, 45 + 1):
                        if(m== l):
                            break
                        for n in range(1, 45 + 1):
                            if(n==m):
                                break
                            if(sum_equals(i,j,k,l,m,n) and multiple_equals(i,j,k,l,m,n)):
                                print(i,j,k,l,m,n)
                                return


def all_multiplies(halmaz,number):
    while(number < 46):
        halmaz.add(number)
        number = number+number


def remove_from_set(halmaz):
    halmaz_copied = set(halmaz)

    for i in halmaz_copied:
        if i > 45:
            halmaz.remove(i)


def lotto_numbers_fast():
    elemek = primtenyezos(996300)
    elemek_elofordulasa=dict()
    for x in elemek:
        if str(x) in elemek_elofordulasa:
            elemek_elofordulasa[str(x)]+=1
        else:
            elemek_elofordulasa[str(x)]=1

    elemek_copied = list(elemek)
    halmaz = set(elemek)
    for x in elemek_copied:
        for i in range(1,elemek_elofordulasa[str(x)]):
            halmaz.add(x**i)


    for i in elemek_copied:
        for j in elemek_copied:
            halmaz.add(i*j)

    remove_from_set(halmaz)

    halmaz_copied = set(halmaz)

    for x in halmaz_copied:
        all_multiplies(halmaz,x)

    for i in halmaz:
        for j in halmaz:
            if j==i:
                break
            for k in halmaz:
                if k==j:
                    break
                for l in halmaz:
                    if l==k:
                        break
                    for m in halmaz:
                        if m==l:
                            break
                        for n in halmaz:
                            if n==m:
                                break
                            if sum_equals(i,j,k,l,m,n) and multiple_equals(i,j,k,l,m,n):
                                print(i,j,k,l,m,n)


def main():
    lotto_numbers()
    #lotto_numbers_fast()



if __name__ == '__main__':
    start_time = time.time()
    main()
    print(time.time()-start_time)