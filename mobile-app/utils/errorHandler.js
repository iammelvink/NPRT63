export function getReadableError(error) {

    if (!error) {
        return 'Something went wrong.';
    }

    if (typeof error === 'string') {
        return error;
    }

    if (error.message) {

        switch (error.message) {

            case 'Network Error':
                return 'No internet connection. Please check your network.';

            case 'Unauthorized':
                return 'Your session has expired. Please login again.';

            case 'Forbidden':
                return 'You do not have permission to perform this action.';

            case 'Not Found':
                return 'The requested information could not be found.';

            case 'Timeout':
                return 'The request took too long. Please try again.';

            default:
                return error.message;
        }

    }

    return 'Unexpected error occurred.';
}

export function logError(error, screen = 'Unknown') {

    console.log('================================');

    console.log('APPLICATION ERROR');

    console.log('Screen:', screen);

    console.log(error);

    console.log('================================');

    /*
        Future:

        Sentry.captureException(error);

        FirebaseCrashlytics.recordError(error);

    */

}