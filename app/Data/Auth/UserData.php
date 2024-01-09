<?php

namespace App\Data\Auth;

use DateTime;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class UserData extends Data
{
    public function __construct(
        public int      $id,
        public string   $name,
        public string   $email,
        public DateTime $email_verified_at,
        public DateTime $created_at,
        public DateTime $updated_at,
    )
    {
    }
}
