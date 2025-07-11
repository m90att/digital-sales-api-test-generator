class ApiTestGenerator {
    constructor() {
        this.currentPayload = null;
        this.history = [];
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.getElementById('generateBtn').addEventListener('click', () => this.generateJson());
        document.getElementById('copyJson').addEventListener('click', () => this.copyToClipboard());
        document.getElementById('exportJson').addEventListener('click', () => this.exportJson());
        document.getElementById('newPayload').addEventListener('click', () => this.newPayload());
        document.getElementById('history').addEventListener('click', () => this.showHistory());
        document.getElementById('exportCsv').addEventListener('click', () => this.exportCsv());
    }

    async generateJson() {
        try {
            const formData = new FormData(document.getElementById('configForm'));
            const config = {};
            
            for (let [key, value] of formData.entries()) {
                if (value) config[key] = value;
            }

            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(config)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            this.currentPayload = data;
            this.displayJson(data);
            this.addToHistory(data);
        } catch (error) {
            console.error('Error generating JSON:', error);
            this.displayError('Error generating JSON: ' + error.message);
        }
    }

    displayJson(data) {
        const preview = document.getElementById('jsonPreview');
        preview.textContent = JSON.stringify(data, null, 2);
        preview.style.color = '#333';
    }

    displayError(message) {
        const preview = document.getElementById('jsonPreview');
        preview.textContent = message;
        preview.style.color = '#e74c3c';
    }

    async copyToClipboard() {
        if (!this.currentPayload) {
            alert('No JSON to copy. Generate a payload first.');
            return;
        }

        try {
            await navigator.clipboard.writeText(JSON.stringify(this.currentPayload, null, 2));
            alert('JSON copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy:', err);
            alert('Failed to copy JSON to clipboard');
        }
    }

    exportJson() {
        if (!this.currentPayload) {
            alert('No JSON to export. Generate a payload first.');
            return;
        }

        const blob = new Blob([JSON.stringify(this.currentPayload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `digital-sales-payload-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    newPayload() {
        document.getElementById('configForm').reset();
        document.getElementById('jsonPreview').textContent = 'Click "Generate JSON" to see preview';
        document.getElementById('jsonPreview').style.color = '#666';
        this.currentPayload = null;
    }

    addToHistory(payload) {
        this.history.push({
            timestamp: new Date().toISOString(),
            payload: payload
        });
        
        if (this.history.length > 50) {
            this.history = this.history.slice(-50);
        }
    }

    showHistory() {
        if (this.history.length === 0) {
            alert('No history available');
            return;
        }

        const historyText = this.history.map((item, index) => 
            `${index + 1}. ${new Date(item.timestamp).toLocaleString()}`
        ).join('\n');

        alert(`History (${this.history.length} items):\n\n${historyText}`);
    }

    exportCsv() {
        if (this.history.length === 0) {
            alert('No history to export');
            return;
        }

        const csvData = this.history.map(item => ({
            timestamp: item.timestamp,
            applicant_name: `${item.payload.applicants[0].firstName} ${item.payload.applicants[0].lastName}`,
            role: item.payload.applicants[0].role,
            gender: item.payload.applicants[0].gender,
            marital_status: item.payload.applicants[0].maritalStatus,
            payload: JSON.stringify(item.payload)
        }));

        const csvContent = this.convertToCSV(csvData);
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `digital-sales-history-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    convertToCSV(data) {
        if (data.length === 0) return '';

        const headers = Object.keys(data[0]);
        const csvRows = [headers.join(',')];

        for (const row of data) {
            const values = headers.map(header => {
                const value = row[header];
                return typeof value === 'string' && value.includes(',') ? `"${value}"` : value;
            });
            csvRows.push(values.join(','));
        }

        return csvRows.join('\n');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ApiTestGenerator();
});