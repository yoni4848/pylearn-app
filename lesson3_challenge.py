
age = 24
is_student = True

if age < 5:
    print("Free")
elif age <= 12:
    print("Child ticket: $10")
elif age <= 64 and is_student:
    print("Student ticket: $10")
elif age <= 64:
    print("Adult ticket: $20")
else:
    print("Senior ticket: $15")
