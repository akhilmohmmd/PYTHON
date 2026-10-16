sum=0
n=int(input('Enter the number :'))
while n>0:
    digit=n%10
    sum=sum+digit
    n=n//10
print('sum of digits is : ',sum)