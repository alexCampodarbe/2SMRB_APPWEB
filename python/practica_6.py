#Objetivo: que me muestre cuantas, horsa y segundos desde los segundos

n = int(input("introduce un numero de segundos "))
minutos = int(n/60)
horas = int(minutos/60)
segundos = n%60
r = (minutos//horas)
m = int(n%minutos)


print(n, " segundos son", horas, " horas,", m, " minutos y ", segundos," segundos")