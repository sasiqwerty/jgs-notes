# forms

- input element is empty
- label element is a container element and used for creating the label for the linked input element
- the label is created first and linked to the input element

## types of input attributes used in forms

- textbox
- checkbox
- radio button
- password box

### textbox

labels and input elements are linked to create a form

```html
<form action="/action_page.php">
  <label for="name-of-student">Name of the student</label>
  <input type="text" name="Student-details" value="Sasi" />
  <label for="graduate">Class of the student</label>
  <input type="text" name="Student-details" value="Teacher" />
  <input type="reset" value="reset" />
  <input type="submit" value="send" />
</form>
```

### checkbox

checkboxes are individually selected

```html
<form action="">
  <input type="checkbox" name="subjects" id="sub1" />
  <label for="sub1">Eng</label>
  <input type="checkbox" name="subjects" id="sub2" />
  <label for="sub2">Tel</label>
  <input type="checkbox" name="subjects" id="sub3" />
  <label for="sub3">Hin</label>
  <input type="reset" value="reset" />
  <input type="submit" value="send" />
</form>
```

### radio button

radio buttons are generally used to create to select an option in multiple choice question

```html
<form action="">
  <input type="radio" name="subjects" id="sub1" />
  <label for="sub1">Eng</label>
  <input type="radio" name="subjects" id="sub2" />
  <label for="sub2">Tel</label>
  <input type="radio" name="subjects" id="sub3" />
  <label for="sub3">Hin</label>
  <input type="reset" value="reset" />
  <input type="submit" value="send" />
</form>
```

### password box

password boxes are specialised text boxes used to enter data, the characters entered are not visible for enhanced privacy

```html
<form action="/action_page.php">
  <label for="password">Enter your password</label>
  <input type="password" name="password" id="label1" />
  <input type="reset" value="reset" />
  <input type="submit" value="send" />
</form>
```
