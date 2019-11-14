import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {newDate} from './weekday';

$(function(){
    $("#formOne").submit(function(event) {
        event.preventDefault();
        const dateInput = new Date($("#dateID").val());
        const weekdayOutput = newDate(dateInput);
        $(".outcome").text(weekdayOutput);
    });
});