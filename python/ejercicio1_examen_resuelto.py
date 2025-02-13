#ejercicio1 examn resuelto

SI=0
PP=1
n= int(input("introduce un nº que no sea 0: "))
if n==0:
    print("el numero es una 0")
else:
    seguir= True
    while seguir:
        n=int(input("introduce un numero distinto de 0: "))
        if n==0:
            seguir=False
            print("la suma de los impares es", SI)
            print("el producto de los pares", PP)
        else:
            if n%2==0:
                PP=PP*n
            else:
                SI=SI+n