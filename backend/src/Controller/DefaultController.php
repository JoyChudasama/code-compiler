<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/default')]
class DefaultController extends AbstractController
{
    #[Route('/run', name: 'app_api_default_run', methods: ['GET','POST'])]
    public function run(Request $request): JsonResponse
    {
        $requestBody = $request->toArray();

        // TODO: run code in docker container - get the code output and send back

        return $this->json($requestBody);
    }
}
