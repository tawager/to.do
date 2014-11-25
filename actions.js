/**
 * Created by a_wags25 on 10/14/14.
 */

    var taskInput =  document.getElementById("#new-task");
    var dueDate =  document.getElementById("#new-date");
    var prioritySelector =  document.getElementById("#setPriority");
    var addButton =  document.getElementsByTagName("button")[0];
    var incompleteTasks = document.getElementById("#incomplete-tasks");
    var completedTasks = document.getElementById("#completed-tasks");
//! *newTaskForm* !//
//*new task list item*//
    var createNewTask = function (taskString) {
        //Create new list item
        var listItem = document.createElement('li');
        //also create new input (checkbox)
        var checkBox = document.createElement('input');
        //new label
        var label = document.createElement('label');
        //dueDate
        var taskDueDate = document.createElement('span');
        //taskPriority
        var taskPriorityVal = document.createElement('span');
        //input (text)
        var editInput = document.createElement('input');
        //button .edit
        var editButton = document.createElement('button');
        //button .delete
        var deleteButton = document.createElement('button');


        //Modify each element
        checkBox.type = "checkbox";
        editInput.type = "text";
        taskDueDate.className = "dueDate";
        taskDueDate.value ='#new-date.value';
        taskPriorityVal.className = "priority";
        taskPriorityVal.value = '#setPriority.value';
        editButton.innerText = "Edit";
        editButton.className = "edit";
        deleteButton.innerText= "Delete";
        deleteButton.className = "delete";
        label.innerText = taskString;


        //Append each element
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        listItem.appendChild(taskDueDate);
        listItem.appendChild(taskPriorityVal);
        listItem.appendChild(editInput);
        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        listItem.appendChild(checkBox);

        return listItem;

    };
    //adding a new task
    var addTask = function(){
        //create a new  incomplete task list item with Input text from #new-task field
        var listItem = createNewTask(taskInput.value);
        //Append listItem to incompleteTaskList
        incompleteTasks.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);

        taskInput.value = "";

    };

//*incomplete task list*//

    //edit an existing task
    var editTask = function(){
        var listItem = this.parentNode;
        //var taskPriorityVal = span.innerText(priority.value);
        var editInput = listItem.querySelector("input['type=text']");
        var label = listItem.querySelector("label");
        //if the class of the parent element is .editMode
        var containsClass = listItem.classList.contains("editMode");
        if (containsClass){
            //Switch from .editMode
            //label of text input becomes value of input
             label.innerText = editInput.value;
        }
            else{
            //switch to .editMode
            //input value becomes label
            editInput.value = label.innerText;
        }

        //toggle .editMode on the parent element
        listItem.classList.toggle("editMode");
    };

    //delete an existing task
    var deleteTask = function(){
        var listItem = this.parentNode;
        var ul = listItem.parentNode;
        //remove the parent list item from the ul
        ul.removeChild(listItem);
    };


//Mark task as complete
    var taskCompleted = function(){
        //Append completed tasks to completedTasks
        console.log("Task complete…");
        var listItem = this.parentNode;
        completedTasks.appendChild(listItem);
        bindTaskEvents(listItem, taskIncomplete);
    };

//Mark task as incomplete
    var taskIncomplete = function(){
        //append incomplete task to incompleteTaskList
        console.log("Task incomplete…");
        var listItem = this.parentNode;
        incompleteTasks.appendChild(listItem);
        bindTaskEvents(listItem, taskCompleted);
    };


    var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
        //select taskListItem's children
        var checkBox = taskListItem.querySelector('input[type="checkbox"]');
        var editButton = taskListItem.querySelector('button.edit');
        var deleteButton = taskListItem.querySelector('button.delete');
        //bind editTask to edit button
        editButton.onclick = editTask;
        //bind deleteTask to delete button
        deleteButton.onclick = deleteTask;
        //bind checkBoxEventHandler to checkbox
        checkBox.onchange = checkBoxEventHandler;
    };

    addButton.addEventListener("click", addTask);

    for(var i = 0; i < incompleteTasks.children.length; i++){

//Select all children of the incompleteTaskList ul items
        // bind events to list item's children (taskCompleted)
        bindTaskEvents(incompleteTasks.children[i], taskCompleted)
    }


    for(var i = 0; i < completedTasks.children.length; i++){

//Select all children of the completedTasks ul items
        //bind events to list item's children (taskIncomplete)
        bindTaskEvents(completedTasks.children[i], taskIncomplete)

    };



//newTaskForm-wishList//

//focus is given to new-task text input
    //div scales 1.3 and 3d transform on the z axis
    //perspective shift?
    //overflow of newEventForm div is visible
//shopping_protocol checkbox
    //launch textarea storeList (ability to email or message this)
//Materials or description of event
    //text input. 1 line that expands as needed
    // ability to add or take photos as references? Later on
//unfocused options have 0,0,8px,0 text-shadow
//repeat-events checkbox
    //select box launched
        //options->daily
//Timer and alerts
//Record and remember date added for use in sort function
    //compare task date to present date
//Email alerts two days before event scheduled a long time in advance
    // (Choose two weeks, one month, three months or none)

//Sort events
    //by priority or by timeline

//Listener for GPS location?

//prevent empty tasks from being created
//change the name of edit button to "save" while in edit mode
