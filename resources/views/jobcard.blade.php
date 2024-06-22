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
            color: black;
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
            border: 1px solid ;

        }
        th, td {
            padding: 5px;
            text-align: left;
            font-size: 12px;
        }
        .config {
            padding: 5px;
           border: 1px solid ;

            margin-top: 10px;
        }
        .terms {
            margin-top: 10px;
            padding: 5px;
            border: 1px solid ;
           
            text-align: left;
        }
        .terms ol {
            margin: 0;
            padding-left: 20px;
        }
        .terms ol li {
            margin-bottom: 5px;
            color: black;
            font-size: 12px;
        }
        .acceptance-table {
            width: 100%;
            margin-top: 10px;
            border-collapse: collapse;
        }
        .acceptance-table td {
            padding: 5px;
           border: 1px solid ;
        
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
            <img src="{{ public_path('/images/mss.jpg') }}" alt="Logo">
            <h1>MULTISOLUTIONS AND SYSTEMS</h1>
        </div>
        <p>#1, Gangai Street, Balaji Nagar, Irumbuliyur, East Tambaram, Chennai -59</p>
        <p>Cell: 98409 81945, 9677269955, multisolutionssystems@gmail.com</p>
        <hr>
        <div class="jobcard-info">
            <h3>JOBCARD</h3>
            <h3>CUSTOMER COPY</h3>
            <div style="margin-top: 10px">
                <span>Job No: {{ $job->id }}</span>
                <span style="float: left;">Date: {{ $job->gdate }}</span>
                <span style="float: right;">Due Date: {{ $job->adate }}</span>
            </div>
        </div>
        <table>
            <tr>
                <td><strong>Service type:</strong></td>
                <td>{{ $job->type }}</td>
            </tr>
            <tr>
                <td><strong>Customer Name:</strong></td>
                <td>{{ $customer->name }}</td>
            </tr>
            <tr>
                <td><strong>Address:</strong></td>
                <td>{{ $customer->address }}</td>
            </tr>
            <tr>
                <td><strong>Contact No.1:</strong></td>
                <td>{{ $customer->pnumber }}</td>
            </tr>
            <tr>
                <td><strong>Whatsapp No:</strong></td>
                <td>{{ $customer->wnumber }}</td>
            </tr>
            <tr>
                <td><strong>E-mail ID:</strong></td>
                <td>{{ $customer->email }}</td>
            </tr>
        </table>
        <div class="config">
            <h4>CONFIGURATION DETAILS</h4>
            <div style="text-align: center">
                <p>{{ $job->prc }}</p>
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
                <td rowspan="2" style="text-align: center">{{ $job->accon }}</td>
                <td rowspan="1"></td>
                <td>{{ $job->psno ? $job->psno : "-"}}</td>
                <td rowspan="2">{{ $job->rough_estimate }} Rs</td>
            </tr>
            <tr>
                <td></td>
                <td>Date: {{ $job->adate }}</td>
            </tr>
        </table>
        <div class="terms">
            <h4 style="text-align:center">Terms and Conditions</h4>
            <ol>
                <li>The above materials will be delivered only against the submission of this job card.</li>
                <li>All the materials must be collected within 28 days from the job date.</li>
                <li>Job card is not valid after 30 days from the job date.</li>
                <li>Depends upon the spares availability and due to critical issues time may vary.</li>
                <li>Any illegal software will be liability to customer only.</li>
                <li>If Multisolutions and Systems does not receive your payment within 30 days after invoice date, we recognize that you have agreed to forfeit your product in lieu of payment, and we will reserve the right to recycle your Device/Unit/Material.</li>
                <li>I, {{ $customer->name }}, authorize Multisolutions & Systems to throw out/destroy/recycle my Device/Unit/Material if not collected within 6 months from the date of JOB CARD (either repaired or not-repaired).</li>
                <li>Subject to the Chennai jurisdiction.</li>
            </ol>
        </div>
        <p style="text-align: center ; margin-top:50px"> <strong>I Accept all the Above Terms for Multisolutions & Systems</strong></p>
        <table>
            <tr>
                <td><strong>Customer Name:</strong></td>
                <td><strong>{{ $customer->name }}</strong></td>
            </tr>
            <tr>
                <td><strong>Signature with Date:</strong></td>
                <td style="height: 40px"></td>
            </tr>
        </table>
        <table style="padding-left:57.6%">
        <td style="height: 100px"><strong>For Multisolutions</strong></td>
        </table>
    </div>




    <div class="container">
        <div >
            <img style="height: 70px; float: left"  src="{{ public_path('/images/mss.jpg') }}" alt="Logo">
            <h1>MULTISOLUTIONS AND SYSTEMS</h1>
        </div>
        <p>#1, Gangai Street, Balaji Nagar, Irumbuliyur, East Tambaram, Chennai -59</p>
        <p>Cell: 98409 81945, 9677269955, multisolutionssystems@gmail.com</p>
        <hr>
        <div class="jobcard-info">
            <h3>JOBCARD</h3>
            <h3>OFFICE COPY</h3>
            <div style="margin-top: 10px">
                <span>Job No: {{ $job->id }}</span>
                <span style="float: left;">Date: {{ $job->gdate }}</span>
                <span style="float: right;">Due Date: {{ $job->adate }}</span>
            </div>
        </div>
        <table>
            <tr>
                <td><strong>Service type:</strong></td>
                <td>{{ $job->type }}</td>
            </tr>
            <tr>
                <td><strong>Customer Name:</strong></td>
                <td>{{ $customer->name }}</td>
            </tr>
            <tr>
                <td><strong>Address:</strong></td>
                <td>{{ $customer->address }}</td>
            </tr>
            <tr>
                <td><strong>Contact No.1:</strong></td>
                <td>{{ $customer->pnumber }}</td>
            </tr>
            <tr>
                <td><strong>Whatsapp No:</strong></td>
                <td>{{ $customer->wnumber }}</td>
            </tr>
            <tr>
                <td><strong>E-mail ID:</strong></td>
                <td>{{ $customer->email }}</td>
            </tr>
        </table>
        <div class="config">
            <h4>CONFIGURATION DETAILS</h4>
            <div style="text-align: center">
                <p>{{ $job->prc }}</p>
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
                <td rowspan="2" style="text-align: center">{{ $job->accon }}</td>
                <td rowspan="1"></td>
                <td>{{ $job->psno ? $job->psno : "-"}}</td>
                <td rowspan="2">{{ $job->rough_estimate }} Rs</td>
            </tr>
            <tr>
                <td></td>
                <td>Date: {{ $job->adate }}</td>
            </tr>
        </table>
        <div class="terms">
            <h4 style="text-align:center">Terms and Conditions</h4>
            <ol>
                <li>The above materials will be delivered only against the submission of this job card.</li>
                <li>All the materials must be collected within 28 days from the job date.</li>
                <li>Job card is not valid after 30 days from the job date.</li>
                <li>Depends upon the spares availability and due to critical issues time may vary.</li>
                <li>Any illegal software will be liability to customer only.</li>
                <li>If Multisolutions and Systems does not receive your payment within 30 days after invoice date, we recognize that you have agreed to forfeit your product in lieu of payment, and we will reserve the right to recycle your Device/Unit/Material.</li>
                <li>I, {{ $customer->name }}, authorize Multisolutions & Systems to throw out/destroy/recycle my Device/Unit/Material if not collected within 6 months from the date of JOB CARD (either repaired or not-repaired).</li>
                <li>Subject to the Chennai jurisdiction.</li>
            </ol>
        </div>
        <p style="text-align: center ; margin-top:50px"> <strong>I Accept all the Above Terms for Multisolutions & Systems</strong></p>
        <table>
            <tr>
                <td><strong>Customer Name:</strong></td>
                <td><strong>{{ $customer->name }}</strong></td>
            </tr>
            <tr>
                <td><strong>Signature with Date:</strong></td>
                <td style="height: 40px"></td>
            </tr>
        </table>
        <table style="padding-left:57.6%">
        <td style="height: 100px"><strong>For Multisolutions</strong></td>
        </table>
    </div>
</body>
</html>
