# React-Components
Some react components.<br />
Save mind.

##EditableSelect
  Just like its name, it's a editable select html element component.To get its value, use "instance.value".<br />
  Example:<br />
    const es=ReactDOM.render(<br />
      <EditableSelect placeholder="enter or select"><br />
        <opt value="0">option a</opt><br />
        <opt value="1">option b</opt><br />
        <opt value="2">option c</opt><br />
      </EditableSelect><br />
    );<br />
    console.log(es.value);//the selected value. maybe the selected value("0"/"1"/"2") or the string user entered.<br />
<br />