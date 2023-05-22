# Time Sheet Chrome Extension

The Time Sheet Chrome Extension is a tool that allows users to conveniently submit their working hours through a simple form. It provides a user-friendly interface for entering start and end times, along with a description. The extension supports configuration of user-specific parameters for customization.

## Features

- Submit working hours by filling out a form.
- Customizable user parameters for enhanced personalization.
- Persistent storage of configuration values.
- Toggle between the time sheet and configuration settings.

## Installation

To install the Time Sheet Chrome Extension, follow these steps:

1. Clone or download the project to your local machine.

2. Open Google Chrome and navigate to `chrome://extensions`.

3. Enable the "Developer mode" by toggling the switch at the top right corner.

4. Click on the "Load unpacked" button.

5. In the file selection dialog, navigate to the directory where you cloned or downloaded the project, and select the folder containing the extension files.

6. Click "Select" to install the extension.

7. The Time Sheet Chrome Extension should now be added to Chrome and ready for use.

## Usage

1. Click on the extension icon located in the top-right corner of the browser to open the Time Sheet form.

2. Fill in the start time, end time, and description for your working hours.

3. Click the "Submit" button to send the time sheet data to the configured API endpoint.

4. After the first submit, the default start and end times will change to '13:00' and '17:00' respectively.

## Configuration

The Time Sheet Chrome Extension allows customization through the following configuration parameters:

- User ID: Enter your user ID for identification purposes.
- Client ID: Enter the client ID associated with your time sheet.
- System ID: Enter the system ID for tracking purposes.

To configure the extension:

1. Click on the settings button under of the Time Sheet form.

2. Enter your desired values for the User ID, Client ID, and System ID.

3. Click the "Save" button to store the configuration settings.

4. The Time Sheet form will reappear with the updated values.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.