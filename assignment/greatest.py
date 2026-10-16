num1=int(input('ENTER THE FIRST NUMBER'))
num2=int(input('ENTER THE SECOND NUMBER'))
num3=int(input('ENTER THE THIRD NUMBER'))

if num1>num2 and num1>num3:
    print(num1,'IS THE GREATEST')

elif num2>num1 and num2>num3:
    print(num2,'IS THE GREATEST')

else:
    print(num3,'IS THE GREATEST')