function GetData()
			{

				var name = document.getElementById("name").value;
				var address = document.getElementById("address").value;
				var pno = document.getElementById("pno").value;
				var email = document.getElementById("email").value;
                var referredby = document.getElementById("referredby").value;
                var name = document.getElementById("name").value;				
				// var fname_patt = /^[A-Za-z]+$/g;
				// var lname_patt = /^[A-Za-z]+$/g;
				// var age_patt = /^[0-9]+$/g;
				// var pno_patt = /^[0-9]+$/g;
				// var email_at = "@";
				// var email_atsrh = email.search(email_at);

				

				var newRow = table.insertRow(table.rows.length);

				var cel1 = newRow.insertCell(0);
				var cel2 = newRow.insertCell(1);
				var cel3 = newRow.insertCell(2);
				var cel4 = newRow.insertCell(3);
				var cel5 = newRow.insertCell(4);
				var cel6 = newRow.insertCell(5);
				var cel7 = newRow.insertCell(6);
				var cel8 = newRow.insertCell(7);
				var cel9 = newRow.insertCell(8);
			

				cel1.innerHTML = name;
				cel2.innerHTML = address;
				cel3.innerHTML = pno;
				cel4.innerHTML = email;
				cel5.innerHTML = referredby;


				//First name Validation

				if(name_patt.test(name)==false)
				{
					document.getElementById("name_alert").innerHTML = "Numbers Here";
					document.getElementById("name_alert").style.color = "red";

				}

				if(name.length==0)
				{
					document.getElementById("name_alert").innerHTML = "First Name Should be Blank";
					document.getElementById("name_alert").style.color = "red";
				}

				//Address Validation
				
				if(address.length== 0 )
				{
					document.getElementById("address_alert").innerHTML = "Address Should be Blank";
					document.getElementById("address_alert").style.color = "red";
				}

				// Pnone Number Validation

				if(pno_patt.test(pno) == false)
				{
					document.getElementById("pno_alert").innerHTML = "Numbers only Allowed";
					document.getElementById("pno_alert").style.color = "red";
				}
      //E-mail Validation

				if(email_atsrh < 0)
				{
					document.getElementById("email_alert").innerHTML ="Enter E-mail Correctly";
					document.getElementById("email_alert").style.color="red";
				}
				
				if(fname.length == 0 || lname.length == 0 || age.length == 0 || address.length == 0 || pno.length == 0 || dob.length == 0 || email.length == 0 || cname.length == 0)
				{

					table.disabled="true";
				}

			}
				

				