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
            <h3>DELIVERY RECIPT</h3>

            <div style="margin-top: 5px ; padding:10px; ">
                <span  style="float: right;">Job No: {{ $job->id }}</span>
                <span style="float: left;">Date: {{ \Carbon\Carbon::now()->format('d-m-Y') }}</span>
            </div>
        </div>
        <table >
            
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
            
                <th>S.No Details</th>
              
            </tr>
            <tr>
                <td  style="text-align: center">{{ $job->accon }}</td>
          
                <td>{{ $job->psno ? $job->psno : "-"}}</td>
               
            </tr>
            
        </table>

        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="border: 1px solid black; padding: 8px;">
                    <strong>Action Taken:</strong><br>
                    
                </td>
                <td> {{$job->action_taken}}
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid black; padding: 8px;">
                    <strong>Charges:</strong><br>
                    
                </td>
                <td> Rs. {{$job->final_amount}} 
                </td>
            </tr>
        </table>
        <div class="terms">
            <h4 style="text-align:center">Terms and Conditions</h4>
            <ol>
                <li>We will not give warranty for service</li>
                <li>Please check the condition and accessories while collecting the product	</li>
                <li>Subject to the Chennai Jurisdiction</li>
                <li>Software installed in your CPU and HDD, if any illegal software will be liablity to customer only</li>
            </ol>
        </div>
        <table style=" border-collapse: collapse;">
            <tr>
                <td style="border: 1px solid black; padding: 8px;">
                    <strong>Return Condition</strong><br>
                    
                </td>
                <td  > {{$job->return_condition}}
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid black; padding: 8px;">
                    <strong>Mode
                    </strong><br>
                    
                </td>
                <td> {{$job->cash_mode}}
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid black; padding: 8px;">
                    <strong>Final Amount
                    </strong><br>
                    
                </td>
                <td> Rs.{{$job->final_amount}}
                </td>
            </tr>
            <tr>
                <td style="border: 1px solid black; padding: 8px;">
                    <strong>Received by Name & Signature	
                    </strong><br>
                    
                </td>
                <td style="height: 10%"> 
                </td>
            </tr>
            
        </table>
        <p style="text-align: center ; border:1px solid black ; color:red ; text-"> <strong>All the above materials received with said returned condition</strong></p>
        
        <table style="padding-left:57.6%">
        <td style="height: 100px"><strong>For Multisolutions</strong></td>
        </table>
    </div>





</body>
</html>
