﻿$(document).ready(function () {
    var buttonVnClick = function () {
        $.ajax({
            url: "/api/form/vn/" + $("#form-header").attr("data-form-id"),
            method: "GET",
            success: function (data) {
                $("#form-header").html(data);
            }
        });

        $("#customer-info-first-name").html("Tên");
        $("#customer-info-last-name").html("Họ");
        $("#customer-info-phone-number").html("Điện Thoại");
        $("#customer-info-email").html("Email");
        $("#customer-info-birth-day").html("Ngày Sinh");
        $("#customer-info-job").html("Nghề Nghiệp");
        $("#customer-info-address1").html("Địa Chỉ 1");
        $("#customer-info-address2").html("Địa Chỉ 2");
        $("#customer-info-city").html("Thành Phố");
        $("#customer-info-state").html("Quận/Bang");
        $("#customer-info-zip").html("Mã Bưu Chính");
        $("#customer-info-country").html("Quốc Gia");
        $("#customer-info-purpose").html("Mục Đích");
        $("#form-submit").val("Gửi");
    };

    var buttonFrClick = function () {
        $.ajax({
            url: "/api/form/fr/" + $("#form-header").attr("data-form-id"),
            method: "GET",
            success: function (data) {
                $("#form-header").html(data);
            }
        });

        $("#customer-info-first-name").html("Prénom");
        $("#customer-info-last-name").html("Nom");
        $("#customer-info-phone-number").html("Tel");
        $("#customer-info-email").html("Email");
        $("#customer-info-birth-day").html("Anniversaire");
        $("#customer-info-job").html("Metier");
        $("#customer-info-address1").html("Adresse 1");
        $("#customer-info-address2").html("Adresse 2");
        $("#customer-info-city").html("Ville");
        $("#customer-info-state").html("Etat");
        $("#customer-info-zip").html("Code Postale");
        $("#customer-info-country").html("Pays");
        $("#customer-info-purpose").html("Objectif");
        $("#form-submit").val("Soumettre");
    };

    var buttonUsClick = function () {
        $.ajax({
            url: "/api/form/us/" + $("#form-header").attr("data-form-id"),
            method: "GET",
            success: function (data) {
                $("#form-header").html(data);
            }
        });

        $("#customer-info-first-name").html("First Name");
        $("#customer-info-last-name").html("Last Name");
        $("#customer-info-phone-number").html("Phone Number");
        $("#customer-info-email").html("Email");
        $("#customer-info-birth-day").html("Birthday");
        $("#customer-info-job").html("Job Title");
        $("#customer-info-address1").html("Address 1");
        $("#customer-info-address2").html("Address 2");
        $("#customer-info-city").html("City");
        $("#customer-info-state").html("State");
        $("#customer-info-zip").html("Zip Code");
        $("#customer-info-country").html("Country");
        $("#customer-info-purpose").html("Purpose");
        $("#form-submit").val("Submit");
    };

    $("#button-vn").on("click", buttonVnClick);
    
    $("#button-fr").on("click", buttonFrClick);

    $("#button-us").on("click", buttonUsClick);

    var lang = $("#form-header").attr("data-form-lang");

    if (lang === "vn") {
        buttonVnClick();
    } else if (lang === "fr") {
        buttonFrClick();
    } else if (lang === "en") {
        buttonUsClick();
    }
})