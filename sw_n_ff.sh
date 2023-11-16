#!/bin/bash

PARAM=$1
START_PATH="${PWD}/startdb.sh"
FINISH_PATH="${PWD}/finishdb.sh"



#if [$# > 1 -o -z $param]; then exit fi

#if [ $# -gt 1 -o -z "$param" ] then
# exit 1
#fi

echo $#

if [ $# -lt 1 -o -z "${PARAM}" ]; then
    echo "Parameter are required!"
    exit 1
elif [ $# -gt 1 ]; then
    echo "Just one parameter per run time!"
    exit 1
elif [ "${PARAM}" == "on" ]; then
    source "${START_PATH}"
elif [ "${PARAM}" == "off" ]; then
    source "${FINISH_PATH}"
fi 

#else
#    echo "Unknown parameter"
#fi


#for i in "$@" 
#do
#	echo $i
#done
