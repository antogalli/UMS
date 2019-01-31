<?php

namespace App\Http\Controllers;

use App\User;
use http\Message;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response() -> json(
            [
                'data'=> User::get(),
                'success'=>true
            ]
        );

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        {
            $data = [];
            $message = '';
            try {
                $User = new User();
                $postData = $request -> except('id','_method');
                $postData['password'] = bcrypt('test');
                $User->fill($postData);
                $success = $User->save();

                $data = $User;

            } catch (\Exception $e) {
                $success = false;
                $message = $e->getMessage();
            }
            return compact('data','message','success');

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = [];
        $message = '';
        try {
            return
                response() -> json(['data' => User::findOrFail($id)]);
        } catch (\Exception $e) {
            return response()->json(
                [
                    'data' => [],
                    'message' => $e -> getMessage()
                ]
            );
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = [];
        $message = '';
        try {
            $User = User::findOrFail($id);
            $postData = $request -> except('id');
            $postData['password'] = bcrypt('test');
            $success = $User->update($postData);
            $data = $User;

        } catch (\Exception $e) {
            $success = false;
            $message = $e->getMessage();
        }
        return compact('data','message','success');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $data = [];
        $message = '';
        try {
            $User = User::findOrFail($id);
            $data = $User;
            $success = $User->delete();
            $message = 'è stato cancellato';

        } catch (\Exception $e) {
            $success = false;
            $message = 'User not found';
        }
        return compact('data','message','success');
    }
}
