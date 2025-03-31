#Objetivo: Convertir pulgadas y pies en cm

p = eval(input("introduce nº de pies:"))
pu = eval(input("introduce nº de pulgadas:"))

n_pu = 2.54*pu
n_p = 2.54*12
pies = p*n_p
r = n_pu+pies

print(p," pies y ", pu," pulgadas son ", r," cm")