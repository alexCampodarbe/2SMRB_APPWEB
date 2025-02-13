#Objetivos:  un programa que pida un número entero mayor que cero y que escriba sus divisores


b=  int(input("escribe un numero entero mayor que 0: "))

if b>0:
    for n in range(1, b+1):
        if b%n==0:
            print(n,end=" ")
else:
    print("TIENE QUE SER MAYOR QUE 0")