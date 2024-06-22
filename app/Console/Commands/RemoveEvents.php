<?php

namespace App\Console\Commands;
use App\Models\Events;
use Illuminate\Console\Command;

class RemoveEvents extends Command
{
    protected $signature = 'remove:old-events';
    protected $description = 'Remove old events from registration';
    public function handle()
    {
        null;
    }
}
