#Objetivo: que me de la anchura y altura con *


def pinta_linea(base):
    print(base*"* ")
def pintar_rectangulo(base, altura):
    for i in range(altura):
        pinta_linea(base)

#iniciamos la función

alt = 3
anc = 5
pintar_rectangulo(anc, alt)
