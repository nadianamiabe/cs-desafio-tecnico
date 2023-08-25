#!/usr/bin/env bash
clear
echo "----------------------------------------------------------------"
echo "Verificando se o diretório destino existe"
echo
sleep 1
if [ ! -d "destino" ]; then
    echo "Diretório destino não existe. Criando.. "
    sleep 1
    mkdir "destino"
fi

echo
echo "Diretório destino disponível"
sleep 1
echo
echo "Copiando arquivos txt para o diretório destino"
echo
sleep 1
cp origem/*.txt destino/

sleep 1
if [ $? -eq 0 ]; then
    echo "Cópia concluída com sucesso!"
else
    echo "Ocorreu um erro durante a cópia."
fi

echo "-----------------------------------------------------------------"
