	$(document).ready(function(){

			// Custom method to validate username
			$.validator.addMethod("usernameRegex", function(value, element) {
				return this.optional(element) ||  /^(([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}\s{1}[а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25})|([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}))$/i.test(value); 
			}, "The name must contain more than two characters without any special characters and spaces");
			$.validator.addMethod("emailRegex", function(value, element) {
				return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(value); 
			}, "The email must contain more than two characters without any special characters and spaces");
			$.validator.addMethod("SubjectRegex", function(value, element) {
				return this.optional(element) ||  /^(([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}\s{1}[а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25})|([а-яА-Я\`ґєҐЄ´ІіЇї\a-zA-Z]{0,25}))$/i.test(value); 
			}, "The email must contain more than two characters without any special characters and spaces");
			
			$(".next").click(function(){
				var form = $("#myform");
				
		        //show the next fieldset
		        form.validate({
		        	errorElement: 'span',
		        	errorClass: 'help-block',
		        	highlight: function(element, errorClass, validClass) {
		        		$(element).closest('.form-group').addClass("error-form");
		        	},
		        	unhighlight: function(element, errorClass, validClass) {
		        		$(element).closest('.form-group').removeClass("error-form");
		        	},
		        	rules: {
		        		username: {
		        			required: true,
		        			usernameRegex: true,
		        			minlength: 3,
		        		},
		        		
		        		email: {
		        			required: true,
		        			email: true,

		        		},

		        		Subject:{
		        			required: true,
		        			minlength: 3,
		        		},
		    
		        	},
		        	messages: {
		        		username: {
		        			required: "You have entered an invalid name",
		        			minlength: "You have entered an invalid name",
		        			maxlength: "You have entered an invalid name",
		        		},
		        		email: {
		        			required: "You have entered an invalid email",
		        			email: "You have entered an invalid email",
		        		},
		        		Subject: {
		        			required: "You have entered an invalid subject",
		        			minlength: "You have entered an invalid subject",
		        		},
		        		

		        	}
		        });
		        textarea();
		    });
			
			function textarea(){
				var field = $("#text").val().replace(/\s+/g,'');
				var length = field.length;
				var usernamecheck = /^(?=.+[а-яА-ЯёЁa-zA-Z])/;
		        if(!$.trim(field).match(usernamecheck) || length < 5 ){
		            $('#message').text("Please enter at least 5 characters.");
		            $('.next').attr('disabled', 'disabled');
		            setInterval(function() {
					  $('.next').removeAttr('disabled');
					}, 3000);
		            return false;

		        }else{
		          $( '#text' ).css( "border", "1px solid #1abc9c" );
		            $('#message').remove();		            
		        }
			}
	});



