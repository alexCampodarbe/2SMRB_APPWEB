#ejercico 2 del examen resuelto

lado= int(input("introduce el lado: "))
for fila in range(lado):
    for col in range(lado):
        if fila ==0 or fila== lado -1:
            print("*", end=" ")
        else:
            if col ==0 or col ==lado -1:
                print("*", end=" ")
            else:
                print(" ", end=" ")
    print()