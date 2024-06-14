<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/javascript_code')]
class JavascriptCodeController extends AbstractController
{
    #[Route('/run', name: 'app_api_javascript_code_run', methods: ['GET','POST'])]
    public function run(Request $request): JsonResponse
    {
        $requestBody = $request->toArray();
        $code = $requestBody['code'];
        
        // TODO: run js $code in docker container - get the code output and send back

        return $this->json($code);
    }
}
