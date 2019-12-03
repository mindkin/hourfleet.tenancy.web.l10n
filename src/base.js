var translation_en = {
    controllers: {
        datepicker: {
            buttons: {
                close: 'Close',
                current: 'Current',
                clear: 'Clear',
            },
        },
        cars_list_availability: {
            titles: {
                new: 'New',
                available: 'Available',
            },
        },
    },
    directives: {
        profileImage: {
            verifications: {
                borrowerNot: 'Not a borrower',
                borrowerVerified: 'Verified as a borrower',
                borrowerUnverified: 'Not yet verified as a borrower',
                carOwnerNot: 'Not a car owner',
                carOwnerVerified: 'Verified as a car owner',
                carOwnerUnverified: 'Not yet verified as a car owner'
            },
        },
        loader: {
            toobusy: 'still working on it...'
        },
    },
    filters: {
        displayExtendedDate: {
            timeSpans: {
                now: 'Just now'
            },
        },
        displayDateDuration: {
            never: 'never',
        },
        displayBookingUsageDuration: {
            lessThanMinute: 'less than a minute',
            day: {
                singular: 'day',
                plural: 'days',
            },
            hour: {
                singular: 'hr',
                plural: 'hrs',
            },
            minute: {
                singular: 'm',
                plural: 'm',
            },
        },
        displayDistance: {
            meter: {
                abbrev: 'm',
                singular: 'meter',
                plural: 'meters',
            },
        },
    },
    referenceData: {
        vehicles: {
            transmission: {
                auto: 'Automatic',
                manual: 'Manual',
            }
        },
        pronouns: {
            theirs: 'Their',
            your: 'Your'
        }
    },
    pages: {
        errors: {
            503: {
                title: '{{name}} Getting a Tune Up!',
                retryAfter: {
                    time: 'We should be back up in {{hours}} hrs',
                    none: 'We should be back up shortly',
                },
                message: {
                    first:
                        '{{name}} is currently unavailable while we perform some scheduled maintenance. We apologise for the inconvenience.',
                    second:
                        'Additional services like using the {{name}} app to lock and unlock your car will also be unavailable.',
                },
                support: {
                    title: 'Emergency Contact',
                    message: 'You can still contact technical support for all emergency enquiries.',
                    phone: {
                        description: 'Our Phone Number',
                    },
                    email: {
                        description: 'Our Email Address',
                    },
                },
            }
        },
        layout: {
            navigation: {
                users: {
                    user: {
                        settings: {
                            account: 'Account Details',
                        },
                    },
                    login: 'Sign In',
                    invite: 'Join {{name}}',
                    logout: 'Sign Out',
                },
                operations: {
                    home: 'Operations'
                },
                cars: {
                    list: 'My Cars',
                    search: 'Find a Car',
                    register: 'List a Car',
                },
                rides: {
                    bookings: 'My Bookings',
                },
                howitworks: {
                    home: 'How It Works',
                },
                notifications: 'Notifications',
                about: 'About Us',
                contact: 'Contact',
                alldocs: 'Documents',
                fees: 'Fees',
                privacy: 'Privacy',
                termsofservice: {
                    terms: 'Terms of Service',
                },
                mobileapp: 'Application Mobile',
                support: 'Support',
                headings: {
                    account: 'Account',
                    general: 'General',
                    important: 'Important',
                },
                app: {
                    install: 'Install App'
                }
            },
            social: {
                message: 'Follow Us',
                facebook: 'Facebook',
                twitter: 'Twitter',
                linkedin: 'LinkedIn',
                instagram: 'Instagram',
                blog: 'Blog',
            },
            powered: 'Powered By',
        },
        connectivity: {
            message: 'Your connection has been lost.',
            retry: 'Retry',
        },
        browsercompat: {
            message: 'We currently do not support your browser.',
            advice: 'For the best experience we recommend using',
            reason: 'Why don\'t we support other browsers?',
            justification: 'Supporting all your favorite browsers is a big deal. We are a small business. We have real-world constraints. We have made huge investments in making this App as stable and error free as we can. We continuously run thousands of tests which take many hours to complete to make sure the App you are now using works as you would expect. We can only reliably do that in the latest versions of Chrome. Chrome is the most widely adopted browser on the internet today, and we also think it is the most secure browser today. We rely on many of its security features to keep you safe while using this App. If you want to use another browser, we respect that. We just cannot make any statements or guarantees that this App works well in those browsers, nor that you are as well protected using those browsers. Ultimately, it is your choice.'
        },
        versionupdateprompt: {
            message: 'There is a new version of this app available. Click here to update.',
            button: 'Update',
        },
        home: {
            home: {
                message: 'Redirecting you to your home page',
                bookings: 'Checking for current bookings',
                takings: 'Checking for current trips',
            },
            support: {
                title: 'Support',
                usage: {
                    title: 'Car usage issues',
                },
                insurer: {
                    title: 'Insurance Claims',
                    claimForm: {
                        title: 'Insurance Claim Form',
                    }
                },
                tech: {
                    title: 'Tech Support / Other',
                    phone: {
                        description: 'Our Phone Number',
                    },
                    email: {
                        description: 'Our Email Address',
                    },
                },
                social: {
                    title: 'Contact Us',
                    facebook: {
                        title: 'Facebook',
                    },
                    twitter: {
                        title: 'Twitter',
                    },
                    linkedin: {
                        title: 'LinkedIn',
                    },
                    instagram: {
                        title: 'Instagram',
                    },
                    blog: {
                        title: 'Our Blog',
                    },
                    other: {
                        title: 'Our Support',
                    },
                },
            },
        },
        users: {
            invite: {
                title: 'Join',
                email: {
                    label: 'Email',
                    placeholder: 'Your email address',
                    validations: {
                        required: 'Your email address is necessary',
                        pattern: 'This is not a valid email address',
                        uniqueemail: 'This email address is already registered to an existing account',
                    },
                },
                firstname: {
                    label: 'First Name',
                    placeholder: 'Your first name',
                    validations: {
                        required: 'Your first name is necessary',
                        pattern: 'Your first name contains invalid characters or is too long',
                    },
                },
                lastname: {
                    label: 'Last Name',
                    placeholder: 'Your last name',
                    validations: {
                        required: 'Your last name is necessary',
                        pattern: 'Your last name contains invalid characters or is too long',
                    },
                },
                command1: {
                    label: 'Join Now',
                    loader: 'sending your invitation...',
                },
            },
            invited: {
                title: 'You\'ve Got Mail!',
                instruction: {
                    line1: 'We\'ve just sent an email to:',
                    line2: 'Click the link in the email to finish creating your account.',
                    line3:
                        'If you have not found the email in your inbox, first check your junk email folder, or you can',
                    link: 'try again'
                },
            },
            register: {
                title: 'Create an Account',
                alert: {
                    line1: 'To join {{name}} follow the instructions given in your confirmation email.',
                    line2: 'If you didn\'t receive an email check your spam/junk folder or to request another email',
                    link: 'click here',
                },
                command1: {
                    error: {
                        alert: {
                            line1:
                                'There was a problem setting up your account. Please click the link included in your confirmation email again, or',
                            link: 'request another',
                        },
                    },
                    loader: 'setting up your account...'
                },
                headings: {
                    first: 'Your Details',
                    second: 'Sign In Details',
                },
                firstname: {
                    placeholder: 'Your first name',
                    validations: {
                        required: 'Your first name is necessary',
                        pattern: 'Your first name contains invalid characters or is too long',
                    },
                },
                lastname: {
                    placeholder: 'Your last name',
                    validations: {
                        required: 'Your last name is necessary',
                        pattern: 'Your last name contains invalid characters or is too long',
                    },
                },
                username: {
                    placeholder: 'Email Address',
                    validations: {
                        required: 'Your email address is necessary',
                        pattern: 'This is not a valid email address',
                        uniqueemail: 'This email address is already registered to an existing account',
                    },
                },
                password: {
                    placeholder: 'Password',
                    validations: {
                        required: 'Your password is necessary.',
                        pattern: 'Your password must be {{chars}} or more characters long.'
                    },
                },
                confirmpassword: {
                    placeholder: 'Confirm Password',
                    validations: {
                        required: 'You must confirm the password',
                        pattern: 'You must confirm the password',
                        validator: 'This must match the password'
                    },
                },
                convictions: {
                    label: {
                        text: 'Have you ever had any convictions?',
                    },
                    options: {
                        option1: '(please select an answer)',
                        option2: 'No - I have not',
                        option3: 'Yes - I have had convictions',
                        validations: {
                            required: 'You must provide a Yes or No answer'
                        },
                    },
                    details: {
                        placeholder: 'Please provide full details (including dates and circumstances)',
                        validations: {
                            required: 'You must provide full details (including dates and circumstances)',
                            pattern: 'Contains invalid characters or exceeds {{chars}} characters.'
                        },
                        remaining: '{{chars}} characters remaining'
                    }
                },
                terms: {
                    label1: 'I agree to the',
                    link1: 'terms of service',
                    label2: 'and',
                    link2: 'privacy policy'
                },
                command2: {
                    label: 'Create Now',
                    errors: {
                        invalid: 'This registration is invalid.',
                        register: 'creating a new account for you',
                    },
                    loader: 'creating your account',
                },

            },
            login: {
                forgot: 'Forgot Password?',
                notmember: 'Not a Member?',
                signup: 'Sign Up For Free',
                member: 'Have an Account?',
                signin: {
                    title: 'Sign In',
                    salutation: 'Welcome',
                    email: {
                        label: 'Email',
                        placeholder: 'Your email address',
                        validations: {
                            required: 'Your email address is necessary',
                            pattern: 'This is not a valid email address',
                            uniqueemail: 'This email address is already registered to an existing account.',
                        },
                    },
                    password: {
                        label: 'Password',
                        placeholder: 'Password',
                        validations: {
                            required: 'Your password is necessary.',
                            pattern: 'Your password must be {{chars}} or more characters long.'
                        },
                    },
                    invalidcredentials: 'The username or password you entered is invalid. Please try again.',
                    command1: {
                        label: 'Next',
                        loader: 'checking for your account...',
                    },
                    command2: {
                        label: 'Sign in',
                        loader: 'signing you in...',
                    },
                },
                locked: {
                    title: 'Sorry!',
                    alert: {
                        heading: 'Your account is Locked!',
                        line1: 'You will be unable to sign-in to your account or access this site.',
                        line2:
                            'If this has happened because you entered your password wrong too many times, you can try signing in again in a few minutes.',
                    },
                    body: 'If you believe this has happened in error, please contact support to report it.',
                }
            },
            settings: {
                driverslicense: {
                    heading: 'Upload License',
                    verified1: 'Your driver\'s license is verified!',
                    verified2:
                        'Updating your verified license will require it to be verified again. This may cause delays to any existing bookings you may already have.',
                    jurisdiction: {
                        instruction: 'Please select the country/state of your license.',
                        label: 'Licensing Country/State',
                        validations: {
                            required: 'The country/state of this license must be provided',
                        },
                        note1:
                            'If your country/state does not appear in the list above then your license type is probably not supported. Please contact',
                        note2: 'Support',
                        note3: 'for more details',
                    },
                    photos: {
                        instruction: {
                            title: 'Instructions',
                            content:
                                'Please take a photo of both the front and back of your driver\'s license and then upload those photos below.',
                        },
                        front: {
                            label: 'Front Photo',
                            image: 'The front of your driver\'s license',
                        },
                        back: {
                            label: 'Back Photo',
                            image: 'The back of your driver\'s license',
                        },
                        units: '{{dimension}} x {{dimension}} pixels max',
                        uploadbutton: {
                            loader: 'uploading image',
                            exists: 'Change',
                            notexists: 'Add Photo'
                        },
                        loader: 'uploading your driver\'s license photo',
                    },
                    details: {
                        instruction:
                            'Please copy the details, as they are exactly, from your license into the fields below.',
                    },
                    dateofbirth: {
                        label: 'Date of birth',
                    },
                    expiry: {
                        label: 'Expiry date',
                    },
                    number: {
                        label: 'License Number',
                        validations: {
                            pattern: 'Not a valid driver\'s license number.'
                        }
                    },
                    classes: {
                        label: 'Classes',
                        validations: {
                            pattern: 'Not a valid set of classes.'
                        }
                    },
                    loader: 'updating your driver\'s license details',
                    commands: {
                        submit: 'Update',
                        cancel: 'Cancel'
                    }
                }
            }
        }
    },
};