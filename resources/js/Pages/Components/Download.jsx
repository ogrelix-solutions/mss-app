import React from 'react';
import axios from '../api/axios';

const DownloadJobCardButton = () => {
    const handleDownload = () => {
        axios({
            url: 'download-jobcard',
            method: 'POST',
            responseType: 'blob', // Important: set the response type to 'blob'
        }).then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'jobcard.pdf');
            document.body.appendChild(link);
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);
        }).catch(error => {
            console.error('Error downloading PDF:', error);
        });
    };

    return (
        <button onClick={handleDownload}>
            Download Job Card
        </button>
    );
};

export default DownloadJobCardButton;
