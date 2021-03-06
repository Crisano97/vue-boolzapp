const app = new Vue (
    {
        el: '#app',

        data: {
            search: '',

            activeIndex: 0,

            newMessage: '',

            contactAnswer: 'ok',

            messageSent: 'message-sent',

            messageReceived: 'message-received',

            dropdownMenu: false,

            messageClicked: '',

            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        },
        methods: {
            setActiveIndex: function(index){
                this.activeIndex = index;
            },
            addNewMessage: function(newElement){
                if(!newElement == '') {
                    this.contacts[this.activeIndex].messages.push({message: newElement, status: 'sent', date: moment()});
                    this.newMessage = '';
                }
            },
            newContactAnswer: function(answer) {
                setTimeout(() => {
                this.contacts[this.activeIndex].messages.push({message: answer, status: 'received', date: moment()});
                }, 1000);
            },
            filterContacts: function(){
                for (let i = 0; i < this.contacts.length; i++){

                    let searchBarLowerCase = this.search.toLowerCase();
                    let contactLowerCase = this.contacts[i].name.toLowerCase();

                    if(searchBarLowerCase === '') {
                        this.contacts[i].visible = true;
                    } else {
                        if(!contactLowerCase.includes(searchBarLowerCase)) {
                            this.contacts[i].visible = false;
                        } else {
                            this.contacts[i].visible = true;
                        }
                    }
                };
            },
            deleteMessage: function(index, array){
                array.splice(index, 1);
            },
            lastMessage: function(i){
                const allMessages = this.contacts[i].messages;
                const currentLastMessage = allMessages[allMessages.length - 1];
                const lastMessage = currentLastMessage.message;
                return lastMessage;
            },
            messagesTime: function(i){
                const allMessages = this.contacts[this.activeIndex].messages;
                const currentMessages = allMessages[i];
                const messagesHour = moment(currentMessages.date, 'DD/MM/YYYY hh:mm:ss').format("HH:mm");
                return messagesHour;
            },
            lastMessageTime: function(i){
                const allMessages = this.contacts[i].messages;
                const currentLastMessage = allMessages[allMessages.length - 1];
                const lastMessageHour = moment(currentLastMessage.date, 'DD/MM/YYYY hh:mm:ss').format("HH:mm");
                return lastMessageHour;
            },
            toggle: function(index){
                this.messageClicked = index;
                if (this.dropdownMenu === false){
                    this.dropdownMenu = true;
                } else {
                    this.dropdownMenu = false;
                }
            }   
        },
       
    }
)