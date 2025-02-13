#Objetivo: que me calcule los minutos desde los segundos

n = int(input("Introduce un numero de segundos "))
minutos = int(n/60)
segundos = n%60

print(n, " segundos son ", minutos, " minutos y ", segundos, " segundos")