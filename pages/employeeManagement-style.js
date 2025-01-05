import { css } from 'lit';

  export const style = css`
    .employee-list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 5px;
      color: #f60;
    }
    .employee-list-header h3 {
      font-weight: 700;
    }

    .employee-list-main {
      padding: 20px;
      background: #fff;
      border-radius: 5px;
    }
 
    table {
      width: 100%;
      border-collapse: collapse;
      text-align: center;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
    }
    th {
      height: 36px;
      color: #f60;
      font-size: 12px;
      font-weight: normal;
    }
    td {
      color: #666766;
    }
    td:nth-child(1), td:nth-child(2) {
      color: #444;
      font-weight: 600;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin: 0.5em 0;
      padding: 0.5em;
      border-radius: 4px;
    }
    button, a {
      margin-left: 0.5em;
      border: none;
      color: #f60;
      cursor: pointer;
      background-color: unset;
      text-decoration: none;
    }
    .pagination {
      display: flex;
      justify-content: center;
      margin-top: 1em;
    }
    .pagination button {
      padding: 0;
    }
    .pagination-number {
      height:32px;
      width: 32px; 
      color: #666766; 
    }
    .pagination-number:disabled {
      background-color: #f60;
      border-radius: 50%;
      color: #fff;
    }
    .pagination .material-symbols-outlined  {
      font-size: 30px;
      font-weight: 700;
    }
    .employee-list-view button {
      padding: 0;
      color: #f8a36b;
    }
    .employee-list-view button:disabled {
      color: #f60;
    }
    .employee-list-view .material-symbols-outlined {
      font-size: 32px;
    }
    .employee-list-view .list-menu {
      font-weight: 700;
    }
    .search {
      margin-bottom: 1em;
    }
    .search input{
      height: 32px;
      padding-left: 5px;
    }

    .action-button {
      padding: 6px 0 0;
    }

    .list-view-container li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border-bottom: 2px solid #f2f2f2;
      text-align: center;
    }
    .list-view-container li p{
      width: 13%;
    }
    .list-view-container li p.list-view-large {
      width: 20%;
    }
    .list-view-container li p:last-child {
      width: 10%;
    }
    .list-view-header {
      color: #f60;
      font-size: 12px;
      font-weight: normal;
    }

    .toast {
      position: fixed;
      visibility: hidden;
      top: 20%;
      left: 0;
      right: 0;
      width: 250px;
      height: 200px;
      margin: auto;
      padding: 32px 16px 16px 16px;
      background-color: #fff;
      color: #666766;
      text-align: center;
      border: 1px solid #e8e8e8;
      border-radius: 5px;
      z-index: 1;
      font-size: 17px;
      box-shadow: rgb(81 81 81 / 20%) 0px 8px 24px;
    }
    .toast.show {
      visibility: visible;
    }
    .toast.show:before {
      background-color: #fff;
    }
    .toast-approve {
      width: 90%;
      margin-top: 1em;
      padding: .75em;
      background-color: #f60;
      border-radius: 5px;
      color: #fff;
    }
    .toast-cancel {
      width: 90%;
      margin-top: 1em;
      padding: .75em;
      border: 1px solid #666766;
      border-radius: 5px;
      color: #666766;
    }
    @-webkit-keyframes fadein {
      from {bottom: 0; opacity: 0;} 
      to {bottom: 30px; opacity: 1;}
    }
    @keyframes fadein {
      from {bottom: 0; opacity: 0;}
      to {bottom: 30px; opacity: 1;}
    }
    @-webkit-keyframes fadeout {
      from {bottom: 30px; opacity: 1;} 
      to {bottom: 0; opacity: 0;}
    }
    @keyframes fadeout {
      from {bottom: 30px; opacity: 1;}
      to {bottom: 0; opacity: 0;}
    }

    @media (max-width: 768px) {
      table, thead, tbody, th, td, tr {
        //display: block;
      }
      th, td {
        min-width: 100px;
        padding: 0.5em;
      }
      th {
        //background-color: transparent;
      }
      .pagination {
       // flex-direction: column;
      }
  
      .employee-list-main {
        overflow-x: auto;
      }
      ul{
        min-width: 950px;
      }
    }
    @media (max-width: 360px) {
      .employee-list-header {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `;
