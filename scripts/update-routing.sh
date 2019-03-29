#!/bin/sh

while read LINE
do
eval `npx ng g ng-zorro-antd:$LINE $LINE`;
done