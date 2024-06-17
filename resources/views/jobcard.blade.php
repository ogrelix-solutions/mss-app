<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multisolutions and Systems</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            font-size: 12px;
        }

        .container {
            text-align: center;
            background: #fff;

            width: 100%;
            max-width: 700px;
            border: 1px solid #ccc;
        }

        .header {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            justify-content: center;
            position: relative;
        }

        .header h1 {
            flex-grow: 1;
            text-align: center;
            margin: 0;
            font-size: 18px;
            color: #333;
        }

        .header img {
            position: absolute;
            left: 0;
            margin-right: 10px;
            margin-left: 20px;
            height: 70px;
        }

        h1 {
            margin: 0;
            font-size: 18px;
            color: #333;
        }

        p {
            margin: 5px 0;
            color: #666;
        }

        .jobcard-header {
            text-align: center;
        }

        .jobcard-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
            margin-left: 5px;
            margin-right: 5px;
            
        }

        .jobcard-info span {
            flex: 1;
            text-align: center;
            
        }

        .jobcard-info h3 {
            flex: 2;
            text-align: center;
            margin: 0;
            font-size: 16px;
        }

        table {
            width: 100%;
            margin-top: 10px;
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid #ccc;
        }

        th, td {
            padding: 5px;
            text-align: left;
            font-size: 12px;
        }

        .config {
            padding: 5px;
            border: 1px solid #ccc;
            margin-top: 10px;
        }

        .terms {
            margin-top: 10px;
            padding: 5px;
            border: 1px solid #ccc;
            text-align: left;
        }

        .terms ol {
            margin: 0;
            padding-left: 20px;
        }

        .terms ol li {
            margin-bottom: 5px;
            color: #666;
            font-size: 12px;
        }

        .acceptance-table {
            width: 100%;
            margin-top: 10px;
            border-collapse: collapse;
        }

        .acceptance-table td {
            padding: 5px;
            border: 1px solid #ccc;
            text-align: left;
        }

        .acceptance-table td:first-child {
            width: 30%;
            font-weight: bold;
        }

        .acceptance-table td:last-child {
            width: 70%;
        }

        .acceptance-table td:last-child {
            border-bottom: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="{{public_path().'/images/mss.jpg'}}" alt="Logo">
            <h1>MULTISOLUTIONS AND SYSTEMS</h1>
        </div>
        <p>#1, Gangai Street, Balaji Nagar, Irumbuliyur, East Tambaram, Chennai -59</p>
        <p>Cell: 98409 81945, 9677269955, multisolutionssystems@gmail.com</p>
        <hr>
        
            <div class="jobcard-info">
                <h3>JOBCARD</h3>
                <h3>CUSTOMER COPY</h3>
                <div style="margin-top: 10px">
                <span >Job No: 12345</span>
                <span style="float: left;">Date: 2024-06-13</span>
                <span style="float: right ; ">Due Date: 2024-06-20</span>
                </div>
                
            </div>
        </div>
        <table>
            <tr>
                <td>Service type:</td>
                <td>Laptop</td>
                
            </tr>
            <tr>
                <td>Customer Name:</td>
                <td>Deepak</td>
            </tr>
            <tr>
                <td>Address:</td>
                <td>No.3, Rajagopal Street, Arul Nagar</td>
            </tr>
            <tr>
                <td>Area:</td>
                <td>Irumbuliyur</td>
            </tr>
            <tr>
                <td>Contact No.1:</td>
                <td>8124224499</td>
            </tr>
            <tr>
                <td>Whatsapp No:</td>
                <td>8124224499</td>
            </tr>
            <tr>
                <td>E-mail ID:</td>
                <td>0</td>
            </tr>
        </table>
        <div class="config">
            <h4>CONFIGURATION DETAILS</h4>
            <div style="text-align: center">
                <p>Lenovo Ideapad, i5 11th Generation, 8GB RAM, 256 NVME, Additional Hard disk, with charger cable,</p>
            </div>
        </div>
        <table>
            <tr>
                <th>Problem Reported and Status</th>
                <th></th>
                <th>S.No Details</th>
                <th>Rough Estimate</th>
            </tr>
            <tr>
                <td rowspan="3" style="text-align: center">OS Issue, Desktop Data to be recovered</td>
                <td rowspan="1"></td>
                <td>0</td>
                <td rowspan="2"></td>
            </tr>
            <tr>
                <td></td>
                <td>Date:</td>
            </tr>
        </table>
        <div class="terms">
            <h4>Terms and Conditions</h4>
            <ol>
                <li>The above materials will be delivered only against the submission of this job card.</li>
                <li>All the materials must be collected within 28 days from the job date.</li>
                <li>Job card is not valid after 30 days from the job date.</li>
                <li>Depends upon the spares availability and due to critical issues time may vary.</li>
                <li>Any illegal software will be liability to customer only.</li>
                <li>If Multisolutions and Systems does not receive your payment within 30 days after invoice date, we recognize that you have agreed to forfeit your product in lieu of payment, and we will reserve the right to recycle your Device/Unit/Material.</li>
                <li>I, Deepak, authorize Multisolutions & Systems to throw out/destroy/recycle my Device/Unit/Material if not collected within 6 months from the date of JOB CARD (either repaired or not-repaired).</li>
                <li>Subject to the Chennai jurisdiction.</li>
            </ol>
        </div>
        <p style="text-align: center" >I Accept all the Above Terms for Multisolutions & Systems</p>
        <table >
           
            <tr>
                <td><strong>Customer Name:</strong></td>
                <td>Deepak</td>
            </tr>
            <tr  >
                <td><strong>Signature with Date:</strong></td>
                <td  style="height: 40px"></td>
            </tr>
            
        </table>
        <table style="padding-left:80%">
        <td style="height: 100px"><strong>For Multisolutions</strong></td>
        </table>
    </div>
</body>
</html>
