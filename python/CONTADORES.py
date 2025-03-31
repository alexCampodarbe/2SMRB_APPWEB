#Objetivos: un programa que pregunte cuántos números se van a introducir, pida esos números y escriba cuántos negativos ha introducido. 

b= int(input("¿Cuantos valores quieres introducir?: "))
ne =0
if b>0:
    for t in range(b):
        
        y=int(input("Escribe un numero: "))
        if y<0:
            ne+=1
            print("has introducido", ne, "numeros negativos ")
else:
    print("no hay numeros")