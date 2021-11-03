<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerificationEmail extends Mailable
{
    use Queueable, SerializesModels;

    private $verificationToken;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($verificationToken)
    {
        $this->verificationToken = $verificationToken;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(): VerificationEmail
    {
        return $this->from('virtualismenhely99@gmail.com')
            ->view('Emails.EmailVerification')
            ->with(['verificationToken' => $this->verificationToken]);
    }
}
