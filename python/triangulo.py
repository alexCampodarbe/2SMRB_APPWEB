#hacer que te devuelva un triangulo con (*)

def linea(punto):
    print(punto*"* ")
    suma = 0
    for n in range(punto):
        var = punto/(punto+suma)
        if suma==punto:
            print("noseque")
        else:
            suma=suma+1
def columna(punto):
    for i in range(punto):       
        linea(punto)

puntito = 4

columna(puntito)