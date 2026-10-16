marks = int(input("ENTER YOUR MARKS"))

if marks < 40:
    print("FAIL")
elif marks >= 90:
    print("GRADE: A")
elif marks >= 75:
    print("GRADE: B")
elif marks >= 60:
    print("GRADE: C")
else:
    print("GRADE: D")