num = int(input("ENTER THE NUMBER"))

if num >= 0 and num <= 9:
    print("IT IS A SINGLE DIGIT NUMBER")
elif num >= 10 and num <= 99:
    print("IT IS A TWO DIGIT NUMBER")
elif num >= 100 and num <= 999:
    print("IT IS A THREE DIGIT NUMBER")
else:
    print("IT IS MORE THAN THREE DIGITS")