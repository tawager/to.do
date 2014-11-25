/**
 * Created by a_wags25 on 11/15/14.
 */

$(document).ready(function() {

    var taskInput =  $("#new-task");
    var dateInput =  $("#new-date");
    var prioritySelector =  $("#setPriority");
    var addButton =  $("#create_task");
    var incompleteTasks = $("#incomplete-tasks");
    var completedTasks = $("#completed-tasks");
    var dueSoon = $("#due_soon");
    var taskHistory = $("#task_history");
    var appointments = $("#appointments_list");
    var supplies = $("#supplies_list");
    var home_task_list = $("#home_filter");
    var work_task_list = $("#work_filter");
    var task_search = $("#task_search");
    var submit_search = $("#submit_search");



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
        taskDueDate.value = dateInput.value;
        taskPriorityVal.className = "priority";
        taskPriorityVal.value = prioritySelector.value;
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
        //create a new incomplete task list item with input text from #new-task field
        var listItem = createNewTask(taskInput.val());
        //Append listItem to incompleteTaskList
        incompleteTasks.append(listItem);
        bindTaskEvents(listItem, taskCompleted);

        taskInput.val("");

    };


    /* render_employee_table(employees);


    $("#add").click(function() {
        console.log('clicked!');
        render_edit_box('add');
    });*/

//delete an existing task
    var deleteTask = function(){
        var listItem = this.parentNode;
        var ul = listItem.parentNode;
        //remove the parent list item from the ul
        ul.removeChild(listItem);
    };





});