#React-Components
Some react components.
    Save mind.

EditableSelect
----
Just like its name, it's a editable select html element component.To get its value, use "*instance.value*".<br />
**Example**:
  ```javascript
  const es=ReactDOM.render(
      <EditableSelect placeholder="enter or select">
        <opt value="0">option a</opt>
        <opt value="1">option b</opt>
        <opt value="2">option c</opt>
      </EditableSelect>
    );
    console.log(es.value);//the selected value. 
    //                      maybe the selected value("0"/"1"/"2") or the string user entered.
  ```
While inited:
![img](https://raw.githubusercontent.com/dclovec/React-Components/master/normal.png)<br />
While focused:
![img](https://raw.githubusercontent.com/dclovec/React-Components/master/focus.png)
