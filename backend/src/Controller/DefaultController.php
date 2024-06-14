<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/')]
class DefaultController extends AbstractController
{
    #[Route('/', name: 'app_default', methods: ['GET'])]
    public function default(): Response
    {
        return new Response("Use /api routes", 200);
    }
}
